import * as React from "react"
import av1 from '../assets/av1.png'
import av2 from '../assets/av2.png'

const Opinion = () => (
  <section class="text-gray-600 body-font mb-24">
    <div class="container px-5 mx-auto">
      <h3 class="text-5xl font-medium title-font text-orange-500 mb-12 text-center font-coming">
        Opinie
      </h3>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full border-2 border-orange-300 shadow-md bg-zinc-900/50 shadow-amber-100 00 p-8 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed mb-6 text-slate-300">
              Jestem bardzo zadowolony z usługi. Proces tworzenia był szybki i
              sprawny. Końcowy rezultat przeszedł moje oczekiwania, strona jest
              piękna, przejrzysta i skutecznie promuje mój biznes. Polecam tę
              firmę każdemu, kto potrzebuje profesjonalnej, szybkiej i nowoczesnej strony
              internetowej.
            </p>
            <p class="inline-flex items-center">
              <img alt="avatar męzczyzny" src={av1}
              class="w-12 h-12 rounded-full flex-shrink-0 object-cover
              object-center" />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-slate-300">
                  Adam Rymuz
                </span>
                <span class="text-orange-300 text-sm">Pakiet: PRO</span>
              </span>
            </p>
          </div>
        </div>
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full border-2 border-orange-300 shadow-md bg-zinc-900/50 shadow-amber-100 00 p-8 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed mb-6 text-slate-300">
              Profesjonalista od samego początku, słuchał moich potrzeb, strona ponad moje wymagania. Strona jest łatwa w
              nawigacji, przejrzysta i estetycznie wykonana. Gorąco Polecam!
            </p>
            <p class="inline-flex items-center">
              <img
                alt="avatar męzczyzny"
                src={av2}
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-300">
                  Kamil Koper
                </span>
                <span class="text-orange-300 text-sm">Pakiet: SPECIAL</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Opinion
