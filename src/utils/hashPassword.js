export const hashPassword = async (Password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(Password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.form(new Uint8Array(hashBuffer));

    const hashedPassword = hashArray
       .map((byte) => byte.tostring(16).padStart(2, "0"))
       .join("");

    return hashedPassword;
};