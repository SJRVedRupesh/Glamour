
export interface RoutineStep {
  title: string;
  description: string;
  productSuggestion?: string;
}

export interface TimeFrame {
  title: string;
  timeOfDay: string;
  duration: string;
  steps: RoutineStep[];
}

export interface Routine {
  id: string;
  title: string;
  description: string;
  type: string;
  timeframes: TimeFrame[];
}

export interface QuickRoutine {
  id: string;
  title: string;
  description: string;
  time: string;
  steps: string[];
}
