export interface DatePickerInterFace {
    startDate?: Date | null;
    handleChange: (data: Date | null) => void;
  }