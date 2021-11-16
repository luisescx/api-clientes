export function validatePhoneNumber(phone: string): boolean {
  return (
    phone && phone.length >= 12 && phone.length <= 13 && IsOnlyNumbers(phone)
  );
}

function IsOnlyNumbers(value: string): boolean {
  const regex = /^[0-9]*$/;
  return regex.test(value);
}
