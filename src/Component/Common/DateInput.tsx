'use client';

import { forwardRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { fr } from 'date-fns/locale/fr';
import { Label, FormFeedback } from 'reactstrap';
import { Calendar, X, ChevronLeft, ChevronRight } from 'react-feather';
import Combobox, { ComboboxOption } from './Combobox';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('fr', fr);

const PRIMARY      = '#24695c';
const PRIMARY_LIGHT = 'rgba(36,105,92,0.1)';
const PRIMARY_RING  = 'rgba(36,105,92,0.25)';

const MOIS: ComboboxOption<number>[] = [
  { value: 0,  label: 'Janvier'   },
  { value: 1,  label: 'Février'   },
  { value: 2,  label: 'Mars'      },
  { value: 3,  label: 'Avril'     },
  { value: 4,  label: 'Mai'       },
  { value: 5,  label: 'Juin'      },
  { value: 6,  label: 'Juillet'   },
  { value: 7,  label: 'Août'      },
  { value: 8,  label: 'Septembre' },
  { value: 9,  label: 'Octobre'   },
  { value: 10, label: 'Novembre'  },
  { value: 11, label: 'Décembre'  },
];

const buildAnnees = (): ComboboxOption<number>[] => {
  const current = new Date().getFullYear();
  const years: ComboboxOption<number>[] = [];
  for (let y = current + 5; y >= current - 30; y--) {
    years.push({ value: y, label: String(y) });
  }
  return years;
};
const ANNEES = buildAnnees();

interface DateInputProps {
  label?:       string;
  value:        string;
  onChange:     (v: string) => void;
  placeholder?: string;
  required?:    boolean;
  disabled?:    boolean;
  minDate?:     string;
  maxDate?:     string;
  error?:       string;
  className?:   string;
}

const toDate   = (s?: string) => (s ? new Date(s) : null);
const fromDate = (d: Date | null): string => {
  if (!d) return '';
  const y   = d.getFullYear();
  const m   = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const CustomInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { onClear?: () => void; showClear?: boolean }
>(({ value, onClick, placeholder, disabled, onClear, showClear }, ref) => (
  <div style={{ position: 'relative' }}>
    <input
      ref={ref}
      type='text'
      className='form-control'
      value={value as string}
      onClick={onClick}
      onChange={() => {}}
      placeholder={placeholder}
      disabled={disabled}
      readOnly
      style={{ paddingRight: showClear ? '3.5rem' : '2.25rem', cursor: disabled ? 'not-allowed' : 'pointer' }}
    />
    {showClear && (
      <button
        type='button'
        onClick={(e) => { e.stopPropagation(); onClear?.(); }}
        style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', padding: '2px', cursor: 'pointer', color: '#6c757d', display: 'flex', alignItems: 'center' }}
      >
        <X size={13} />
      </button>
    )}
    <Calendar size={15} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', pointerEvents: 'none' }} />
  </div>
));
CustomInput.displayName = 'DateCustomInput';

const NavBtn = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    type='button'
    onClick={onClick}
    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: PRIMARY, display: 'flex', alignItems: 'center', borderRadius: '4px' }}
    onMouseEnter={(e) => (e.currentTarget.style.background = PRIMARY_LIGHT)}
    onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
  >
    {children}
  </button>
);

const DateInput = ({ label, value, onChange, placeholder = 'jj/mm/aaaa', required, disabled, minDate, maxDate, error, className }: DateInputProps) => {
  const hasError  = Boolean(error);
  const showClear = !required && !disabled && Boolean(value);

  return (
    <div className={`mb-2 sysde-date-wrap ${className ?? ''}`}>
      {label && (
        <Label className='col-form-label'>
          {label}
          {required && <span className='text-danger ms-1'>*</span>}
        </Label>
      )}

      <style>{`
        .sysde-date-wrap .form-control {
          border-color: ${hasError ? '#dc3545' : '#ced4da'};
        }
        .sysde-date-wrap .form-control:hover:not(:disabled) {
          border-color: ${hasError ? '#dc3545' : PRIMARY};
        }
        .sysde-date-wrap .form-control:focus {
          border-color: ${hasError ? '#dc3545' : PRIMARY};
          box-shadow: 0 0 0 0.2rem ${hasError ? 'rgba(220,53,69,.25)' : PRIMARY_RING};
        }
        .sysde-dp-popper { z-index: 9999 !important; }
        .sysde-dp-popper .react-datepicker {
          border: 1px solid #dee2e6;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          font-family: inherit;
          font-size: 0.9rem;
          width: 320px;
          overflow: visible;
        }
        .sysde-dp-popper .react-datepicker__month-container { width: 100%; }
        .sysde-dp-popper .react-datepicker__header {
          background: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
          padding: 10px 10px 6px;
          overflow: visible;
        }
        .sysde-dp-popper .react-datepicker__day-names {
          display: flex;
          justify-content: space-around;
          margin-top: 6px;
        }
        .sysde-dp-popper .react-datepicker__day-name {
          color: #6c757d;
          font-weight: 600;
          font-size: 0.75rem;
          width: 2.2rem;
          text-align: center;
        }
        .sysde-dp-popper .react-datepicker__month { padding: 4px 10px 10px; }
        .sysde-dp-popper .react-datepicker__week {
          display: flex;
          justify-content: space-around;
        }
        .sysde-dp-popper .react-datepicker__day {
          width: 2.2rem;
          height: 2.2rem;
          line-height: 2.2rem;
          border-radius: 6px;
          margin: 2px 0;
          text-align: center;
          transition: background 0.12s;
        }
        .sysde-dp-popper .react-datepicker__day:hover {
          background-color: ${PRIMARY_LIGHT} !important;
          color: #212529 !important;
        }
        .sysde-dp-popper .react-datepicker__day--selected,
        .sysde-dp-popper .react-datepicker__day--keyboard-selected {
          background-color: ${PRIMARY} !important;
          color: #fff !important;
          font-weight: 600;
        }
        .sysde-dp-popper .react-datepicker__day--today { font-weight: 700; color: ${PRIMARY}; }
        .sysde-dp-popper .react-datepicker__day--today.react-datepicker__day--selected { color: #fff; }
        .sysde-dp-popper .react-datepicker__day--outside-month { color: #adb5bd; }
      `}</style>

      <DatePicker
        selected={toDate(value)}
        onChange={(d) => onChange(fromDate(d))}
        customInput={<CustomInput disabled={disabled} showClear={showClear} onClear={() => onChange('')} />}
        dateFormat='dd/MM/yyyy'
        placeholderText={placeholder}
        disabled={disabled}
        minDate={toDate(minDate) ?? undefined}
        maxDate={toDate(maxDate) ?? undefined}
        locale='fr'
        autoComplete='off'
        popperPlacement='bottom-start'
        popperClassName='sysde-dp-popper'
        renderCustomHeader={({ date, changeMonth, changeYear, decreaseMonth, increaseMonth }) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <NavBtn onClick={decreaseMonth}><ChevronLeft size={16} /></NavBtn>
            <div style={{ flex: 1 }}>
              <Combobox<number>
                options={MOIS}
                value={MOIS.find((m) => m.value === date.getMonth()) ?? null}
                onChange={(opt) => opt && changeMonth(opt.value)}
                isClearable={false}
                placeholder='Mois'
              />
            </div>
            <div style={{ width: '90px' }}>
              <Combobox<number>
                options={ANNEES}
                value={ANNEES.find((a) => a.value === date.getFullYear()) ?? null}
                onChange={(opt) => opt && changeYear(opt.value)}
                isClearable={false}
                placeholder='Année'
              />
            </div>
            <NavBtn onClick={increaseMonth}><ChevronRight size={16} /></NavBtn>
          </div>
        )}
      />

      {hasError && <FormFeedback style={{ display: 'block' }}>{error}</FormFeedback>}
    </div>
  );
};

export default DateInput;
