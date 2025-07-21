import SectionUnderlineLabel from "@/components/section-underline-label";
import { IconBrandOpenai } from "@tabler/icons-react";
import { SiHuggingface } from "react-icons/si";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col justify-center mt-10 md:mt-20 items-center w-full">
      <SectionUnderlineLabel title="Why Choose Us" />
      <div className="w-full max-w-5xl py-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 relative bg-neutral-950 border flex flex-col justify-between h-112 rounded-2xl p-4 md:p-7">
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                <img src="/website/dual.svg" className="w-5" />
                <h3 className="font-bold text-xl">
                  Dual Sided Protection
                </h3>
              </div>
              <div className="text-neutral-500">
                <p className="w-full max-w-xs text-sm">
                  Fainrness <span className="text-neutral-200">guaranteed for both sides</span>
                </p>
                <p className="w-full max-w-[16rem] text-sm">
                  Funds locked in <span className="text-neutral-200">smart escrow contract</span> until milestone are completed
                </p>
              </div>
            </div>
            <ul className="text-sm">
              <li>
                ✓ 100 % user friendly
              </li>
              <li>
                ✓ Will become your companion
              </li>
              <li>
                ✓ Easy to use
              </li>
            </ul>
            <img
              src="/website/lock-vector.svg"
              className="absolute w-full max-w-70 right-8 top-1/2 -translate-y-1/3"
              alt="Lock vector illustration"
            />
          </div>
          <div className="col-span-1 bg-neutral-950 border flex flex-col justify-between h-112 rounded-2xl">
            <div className="space-y-3 p-4  md:p-7">
              <div className="flex items-center gap-1">
                <img src="/website/secure-icon.svg" className="w-5" />
                <h3 className="font-bold text-xl">
                  Secure and Trust free
                </h3>
              </div>
              <div className="text-neutral-500">
                <p className="w-full max-w-xs text-sm">
                  <span className="text-neutral-200">Funds are secured in decentralized escrow</span>  until tasks are verified.
                </p>
              </div>
            </div>
            <div className="space-y-3 overflow-hidden pb-5 md:pb-10 lg:pb-16">
              <div>
                <div className="animate-marquee-horizontal flex gap-3 [--duration:60s] text-neutral-400">
                  {
                    new Array(60).fill(0).map((_, index) => (
                      <div key={index} className="py-2 px-5 border rounded-md border-muted">
                        user1241@example.com
                      </div>
                    ))
                  }
                </div>

              </div>
              <div className="animate-marquee-horizontal flex gap-3 [--duration:30s] text-neutral-400">
                {
                  new Array(60).fill(0).map((_, index) => (
                    <div key={index} className="py-2 px-5 border rounded-md border-muted">
                      user@paycasso.com
                    </div>
                  ))
                }
              </div>
              <div className="animate-marquee-horizontal flex gap-3 [--duration:30s] text-neutral-400">
                {
                  new Array(60).fill(0).map((_, index) => (
                    <div key={index} className="py-2 px-5 border rounded-md border-muted">
                      user123@paycasso.com
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="col-span-1  bg-neutral-950 border flex flex-col justify-between h-112 rounded-2xl">
            <div className="space-y-3 p-4 md:p-7">
              <div className="flex items-start gap-1">
                <img src="/website/dispute.svg" className="w-5 mt-1" />
                <h3 className="font-bold text-xl">
                  Dispute Resolution with DAOs
                </h3>
              </div>
              <div className="text-neutral-500">
                <p className="w-full text-sm">
                  Disputes are handled transparently <span className="text-neutral-200">not controlled by Paycasso servers.</span>
                </p>
              </div>
            </div>
            <div className="pb-5 md:pb-16 relative">
              <img src="/website/dispute-resolution.svg" className="w-full max-w-72 mb-10" alt="Dispute resolution illustration" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full text-xs text-nowrap w-fit border bg-muted px-5 py-2">
                Verified reviewers <span className="text-green-400">across globe</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-neutral-950 border flex flex-col justify-between h-112 rounded-2xl" style={{
            backgroundImage: "url('/website/pocket-friendly.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"

          }}>
            <div className="space-y-3 p-4 md:p-6">
              <div className="">
                <img src="/website/choose-arrow.svg" className="w-5 ml-2" />
                <h3 className="font-bold text-xl">
                  Your Pocket Friendly Crypto
                </h3>
              </div>

            </div>
          </div>
          <div className="col-span-1 bg-neutral-950 overflow-hidden border flex flex-col justify-between h-112 relative rounded-2xl"
          >
            <div className="space-y-3 p-4 md:p-7">
              <div className="flex items-center gap-1">
                <img src="/website/ml.svg" className="w-5" />
                <h3 className="font-bold text-xl">
                  Lorem ipsum
                </h3>
              </div>
              <div className="text-neutral-500">
                <p className="w-full text-sm">
                  Integrate your favourite ML-models to <span className="text-neutral-200">store, index and search vector embeddings</span>
                </p>
              </div>
            </div>
            <div className="p-4 md:p-7 text-sm space-y-1 z-1">
              <div className="flex items-center gap-3">
                <IconBrandOpenai className="w-5" /><span>OpenAI</span>
              </div>
              <div className="flex items-center gap-3">
                <SiHuggingface className="w-5 h-5" /><span>Hugging Face</span>
              </div>
            </div>
            <img src="/website/ml-models.svg" className="absolute h-full -bottom-7" />
          </div>
        </div>
      </div>
    </div>
  )
}