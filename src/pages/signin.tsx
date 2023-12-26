import RegistrationForm from "@/components/auth/RegisterationForm";

const SigninPage = () => {
    return (
        <div className='h-screen bg-gray-100 font dark:bg-gray-800'>
            <div className='flex justify-center items-center'>
            <RegistrationForm />
            </div>
        </div>
    )
}

export default SigninPage;