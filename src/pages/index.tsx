import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-pink-400 flex flex-col justify-start items-center gap-5  bg-[url('/bg.jpeg')] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col justify-center items-center gap-2 mt-14 bg-[#ffffff59] w-full rounded-lg p-3 md:w-[640px]">
        <div className="flex flex-col justify-center items-center gap-4 w-full mb-3">
          <Image
            src="/claudia1.jpg"
            alt="Claudia arango"
            width={110}
            height={110}
            priority={true}
            className="w-[110px] h-[110px] object-cover rounded-full shadow-2xl shadow-slate-100"
          />
          <div>
            <h1 className="text-xl font-semibold shadow-2xl">Claudia Arango</h1>
            <h2 className="text-lg font-medium   shadow-2xl text-center">
              Nutricionista
            </h2>
          </div>
        </div>
        <a
          href="https://calendly.com/claudia-arangonutricionista/consulta-1-vez?back=1&month=2023-07"
          className=" cursor-pointer transition-all ease-in-out duration-500 w-full h-14 bg-white flex justify-center items-center rounded-lg hover:bg-transparent border-white border-2 p-4 shadow-md"
          target="_blank"
        >
          <Image
            src="/calendly1.png"
            alt="Tiktok"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="flex-1 text-center font-semibold">
            Agenda tu cita
          </span>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=573172557677&text=%C2%A1Hola%2C%20estoy%20interesado%2Fa%20en%20una%20consulta%20nutricional!"
          target="_blank"
          className="cursor-pointer transition-all ease-in-out duration-500 w-full h-14 bg-white flex justify-center items-center rounded-lg hover:bg-transparent border-white border-2 p-4 shadow-md"
        >
          <Image src="/whatsapp.png" alt="Tiktok" width={30} height={30} />
          <span className="flex-1 text-center font-semibold">Whatsapp</span>
        </a>
        <a
          href="https://instagram.com/claudia_arango_nutricionista?igshid=MmIzYWVlNDQ5Yg=="
          target="_blank"
          className="cursor-pointer transition-all ease-in-out duration-500 w-full h-14 bg-white flex justify-center items-center rounded-lg hover:bg-transparent border-white border-2 p-4 shadow-md"
        >
          <Image src="/instagram.png" alt="Tiktok" width={30} height={30} />
          <span className="flex-1 text-center font-semibold">Instagram</span>
        </a>
        <a
          href="https://www.tiktok.com/@claudiaanutricionista?_t=8dugALVl7ZN&_r=1"
          target="_blank"
          className="cursor-pointer transition-all ease-in-out duration-500 w-full h-14 bg-white flex justify-center items-center rounded-lg hover:bg-transparent border-white border-2 p-4 shadow-md"
        >
          <Image src="/tiktok.png" alt="Tiktok" width={30} height={30} />
          <span className="flex-1 text-center font-semibold">TikTok</span>
        </a>
      </div>
    </div>
  );
}
