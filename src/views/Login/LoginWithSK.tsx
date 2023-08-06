import { useNDK } from "@nostr-dev-kit/ndk-react";
import { LoginViews } from "../../enums/views";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";

export default function LoginWithSK({
  inputSk,
  setInputSk,
  setSession,
  setStep,
}: {
  inputSk: string;
  setInputSk: Function;
  setSession: Function;
  setStep: Function;
}) {
  const { ndk, loginWithSecret } = useNDK();
  const [isError, setIsError] = useState<boolean>(false);

  async function login() {
    try {
      setIsError(false);
      const session = await loginWithSecret(inputSk);
      if (session) {
        console.log(session);
        setSession(session);
        setStep(LoginViews.ENCRYPT);
      }
    } catch (e) {
      setIsError(true);
    }
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.keyCode === 13) {
      login();
      //@ts-ignore
      e.target.blur();
    }
  }

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <img
          className="h-16 mx-auto"
          src={chrome.runtime.getURL("/images/rounded-512.png")}
        />
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          NOSTR Password Manager
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Secure your passwords and notes, encrypted by your key and a passcode.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sk"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              NOSTR Secret Key
            </label>
            <div className="mt-2.5">
              <Input
                type="password"
                name="sk"
                placeholder="nsec..."
                value={inputSk}
                onChange={(e) => setInputSk(e.target.value)}
                isError={isError}
                onKeyUp={(e) => handleKeyUp(e)}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            disabled={ndk === undefined || inputSk.length === 0}
            onClick={() => login()}
          >
            Connect
          </Button>
        </div>
      </div>
    </>
  );
}
