import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { IconArrowNarrowRight } from "@tabler/icons-react"

const COUNTRIES = [
  "India",
  "USA",
  "Germany",
  "China",
  "England"
]

export default function CallToAction() {
  // TODO: change countries or fetch countries to backend


  return (
    <div id="call-to-action" className="w-full flex justify-center items-center bg-neutral-950">
      <div className="w-full max-w-2xl py-10">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-[2.5rem] mb-10">
          Ready to join the revolution?
        </h2>
        <p className="max-w-[16rem]">
          Almost there! We are perfecting your experience—launching soon!
        </p>
        <form className="my-5 space-y-6">
          <div className="w-full flex items-center flex-col gap-4 md:flex-row">
            <input className="border-b w-full font-light text-sm placeholder:text-neutral-500/70 bg-neutral-950 focus-visible:outline-0 text-neutral-400" type="text" name="name" placeholder="Name" />
            <input className="border-b w-full font-light focus-visible:outline-0 text-sm placeholder:text-neutral-500/70 bg-neutral-950 text-neutral-400" type="email" name="name" placeholder="Email" />
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full focus-visible:ring-0 px-0 dark:bg-input/0 hover:dark:bg-input-0 border-b border-l-0 border-r-0 border-t-0 rounded-none dark:text-neutral-500/70 bg-none md:w-1/2">
                <SelectValue placeholder="Select Your Country" className="text-sm" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                {
                  COUNTRIES.map((country) => (
                    <SelectItem value={country} className="rounded-none font-normal cursor-pointer" key={country}>
                      {country}
                    </SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
          </div>
          <Button size="sm" className="px-10 w-full max-w-32 flex" type="submit">
           <span> Send </span>
            <IconArrowNarrowRight />
          </Button>
        </form>
      </div>
    </div>
  )
}