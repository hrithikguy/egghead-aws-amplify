/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Student } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentUpdateFormInputValues = {
    FirstName?: string;
    LastName?: string;
};
export declare type StudentUpdateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentUpdateFormOverridesProps = {
    StudentUpdateFormGrid?: FormProps<GridProps>;
    FirstName?: FormProps<TextFieldProps>;
    LastName?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentUpdateFormProps = React.PropsWithChildren<{
    overrides?: StudentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    student?: Student;
    onSubmit?: (fields: StudentUpdateFormInputValues) => StudentUpdateFormInputValues;
    onSuccess?: (fields: StudentUpdateFormInputValues) => void;
    onError?: (fields: StudentUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StudentUpdateFormInputValues) => StudentUpdateFormInputValues;
    onValidate?: StudentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StudentUpdateForm(props: StudentUpdateFormProps): React.ReactElement;
