import { IconPlayerPlay, IconInfoCircle } from "@tabler/icons";

const Banner = () => {
  return (
    <header className="banner bg-center bg-cover" style={{ backgroundImage: "" }}>
      <div className="banner_contents">
        <h1 className="text-3xl md:text-5xl lg:text-5xl leading-none pb-4 font-semibold">
            FKfkfkkr
        </h1>
        <div className="banner_buttons flex items-center flex-wrap mt-4 ">
          <a href="/tv/ffd?play=true" className="banner_button bg-primary px-10 mt-2">
            <IconPlayerPlay/>
            <span className="ml-2">Play</span>
          </a>
          <a href='{{ route($type.".show", $id) }}' className="banner_button px-5 mt-2">
            <IconInfoCircle/>
            <span className="ml-2">More info</span>
          </a>
        </div>
        {/* <h1 className="pt-4 font-semibold text-lg max-w-2xl">{{ $overview }}</h1> */}
      </div>
      <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner