"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SubmitButton from "../SubmitButton"
import { useAuth } from "@/components/providers/AuthProvider"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export const ResetPasswordForm = ({ token }: { token: string }) => {
    const { handleResetPassword } = useAuth()

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const passwordType = isPasswordVisible ? "text" : "password"
    const PasswordIcon = isPasswordVisible ? Eye : EyeOff;

    const handleSubmit = (formData: FormData) => {
        handleResetPassword(formData, token)
    }
    return (
        <form action={handleSubmit}>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>

                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="flex w-full items-center justify-center border pr-2">
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={passwordType}
                            placeholder="Enter your Confirm Password"
                            className="border-0 focus-visible:ring-0 focus:ring-0 focus:outline-none w-full outline-none focus-visible:outline-none"

                        />
                        <PasswordIcon size={18} onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                    </div>
                </div>

                <SubmitButton title={"Update Password"} />
            </div>
        </form>
    )
}