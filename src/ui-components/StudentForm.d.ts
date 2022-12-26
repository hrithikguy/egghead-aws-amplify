/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentFormInputValues = {
    FirstName?: string;
    LastName?: string;
};
export declare type StudentFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentFormOverridesProps = {
    StudentFormGrid?: FormProps<GridProps>;
    FirstName?: FormProps<TextFieldProps>;
    LastName?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentFormProps = React.PropsWithChildren<{
    overrides?: StudentFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StudentFormInputValues) => StudentFormInputValues;
    onSuccess?: (fields: StudentFormInputValues) => void;
    onError?: (fields: StudentFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StudentFormInputValues) => StudentFormInputValues;
    onValidate?: StudentFormValidationValues;
} & React.CSSProperties>;
export default function StudentForm(props: StudentFormProps): React.ReactElement;
