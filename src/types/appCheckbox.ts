export interface appCheckboxProps {
    variant: 'check' | 'tab';
    label?: string;
    checked?: boolean;
    onchange: () => void;
}
