export const PHONE_NUMBER_PATTERN: RegExp = /^\(\d{3}\) \d{3}-\d{4}$/
export const RAW_PHONE_NUMBER_PATTERN: RegExp = /^\+?1?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$/
export const NAME_PATTERN: RegExp = /^[a-zA-Z\u00C0-\u017F\s-']+$/
export const EMAIL_PATTERN: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

//* INFO: validate password: upper and lower case letters, at least 8 characters and must contain digits
export const PASSWORD_PATTERN: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
//* INFO: validate income: allow currency characters $ at the beginning of the string or not and allow decimal numbers with any digits after the decimal point
export const MONTHLY_INCOME_PATTERN: RegExp = /^(\$)?(\d+)(\.\d+)?$/
