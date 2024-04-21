import { toast } from "react-toastify";
import { saveToSessionStorage } from "./sessionstorage";
import { baseUrl } from "@/constants/baseUrl";

export const onSubmit = async (data, setLoading, router, reset) => {

    const min = 1000;
    const max = 2000;
    const rand = min + Math.random() * (max - min);
    const otpNumber = Math.trunc(rand);
    const otp = btoa(otpNumber);
    setLoading(true)
    saveToSessionStorage("random", otp)
    saveToSessionStorage("isUserReg", data)

    const url = `${baseUrl}/user/registration/check`;

    const registerData = {
        phone: data?.phone,
        code: otpNumber
    };

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(registerData),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(res => {
            if (res.user === false) {
                router.push('/otp-verify', { scroll: false })
                reset();
            }
            if (res.user === true) {
                toast("This Number Already Registered", { type: 'error' })
                setLoading(false)
            }
        })
        .catch((error) => {
            console.error(error, "error");
            setLoading(false)
        });
}
