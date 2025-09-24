import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map } from "rxjs";

export type MembershipTier = "free" | "premium" | "plus";
export type VerificationStatus =
  | "pending"
  | "submitted"
  | "approved"
  | "rejected";

@Injectable({ 
  providedIn: "root" 
})
export class UserStateService {
  private onboardingStepSubject = new BehaviorSubject<number>(1); // 0..n
  private onboardingInnerPercentSubject = new BehaviorSubject<number>(60);
  private membershipSubject = new BehaviorSubject<MembershipTier>("free");
  private verificationStatusSubject = new BehaviorSubject<VerificationStatus>(
    "pending"
  );
  private interestsSubject = new BehaviorSubject<string[]>([
    "Viajes",
    "Música",
  ]);
  private intentionSubject = new BehaviorSubject<string | null>(null);
  private readonly storageKey = "pm_state_v1";

  onboardingStep$ = this.onboardingStepSubject.asObservable();
  onboardingInnerPercent$ = this.onboardingInnerPercentSubject.asObservable();
  membership$ = this.membershipSubject.asObservable();
  verificationStatus$ = this.verificationStatusSubject.asObservable();
  interests$ = this.interestsSubject.asObservable();
  intention$ = this.intentionSubject.asObservable();

  profileCompletion$ = combineLatest([
    this.intention$,
    this.interests$,
    this.verificationStatus$,
    this.onboardingInnerPercent$,
  ]).pipe(
    map(([intention, interests, verification, inner]) => {
      let total = 0;
      if (intention) total += 30;
      total += Math.min(
        interests.length >= 8
          ? 30
          : interests.length >= 5
          ? 20
          : interests.length >= 3
          ? 10
          : 0,
        30
      );
      if (verification === "approved") total += 30;
      total += Math.round((inner / 100) * 10);
      return Math.min(total, 100);
    })
  );

  constructor() {
    if (typeof localStorage !== "undefined") {
      try {
        const raw = localStorage.getItem(this.storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (typeof parsed.onboardingStep === "number")
            this.onboardingStepSubject.next(parsed.onboardingStep);
          if (typeof parsed.onboardingInnerPercent === "number")
            this.onboardingInnerPercentSubject.next(
              parsed.onboardingInnerPercent
            );
          if (
            parsed.membership &&
            ["free", "premium", "plus"].includes(parsed.membership)
          )
            this.membershipSubject.next(parsed.membership);

          if (
            parsed.verification &&
            ["pending", "submitted", "approved", "rejected"].includes(
              parsed.verification
            )
          )
            this.verificationStatusSubject.next(parsed.verification);
          if (Array.isArray(parsed.interests))
            this.interestsSubject.next(parsed.interests.slice(0, 20));
          if (parsed.intention === null || typeof parsed.intention === "string")
            this.intentionSubject.next(parsed.intention);
        }
      } catch {
      }
    }
  }

  private persist() {
    if (typeof localStorage === "undefined") return;
    try {
      const snapshot = {
        onboardingStep: this.onboardingStepSubject.value,
        onboardingInnerPercent: this.onboardingInnerPercentSubject.value,
        membership: this.membershipSubject.value,
        verification: this.verificationStatusSubject.value,
        interests: this.interestsSubject.value,
        intention: this.intentionSubject.value,
      };
      localStorage.setItem(this.storageKey, JSON.stringify(snapshot));
    } catch {
    }
  }

  setOnboarding(step: number, innerPercent?: number) {
    this.onboardingStepSubject.next(step);
    if (innerPercent !== undefined)
      this.onboardingInnerPercentSubject.next(innerPercent);
    this.persist();
  }

  setMembership(tier: MembershipTier) {
    this.membershipSubject.next(tier);
    this.persist();
  }

  setVerification(status: VerificationStatus) {
    this.verificationStatusSubject.next(status);
    this.persist();
  }

  toggleInterest(i: string) {
    const current = new Set(this.interestsSubject.value);
    current.has(i) ? current.delete(i) : current.add(i);
    this.interestsSubject.next([...current]);
    this.persist();
  }

  setIntention(val: string) {
    this.intentionSubject.next(val);
    this.persist();
  }
}
