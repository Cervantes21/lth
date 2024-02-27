import Link from "next/link";

const cards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="w-12 h-12"
      >
        <g fill="#061684">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
        </g>
      </svg>
    ),
    title: (
      <>
        ¡Contactanos! <br /> Nos podes llamar o enviar un WhatsApp
      </>
    ),
    description: `7776002745`,
    button: null,
    exeption: "none",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <path
          fill="#061684"
          d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
        />
      </svg>
    ),
    title: <>Busca tu betería</>,
    description: null,
    button: "Buscar",
    buttonLink: "/",
    exeption: "landing",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="#061684"
            fillRule="nonzero"
            d="M6.72 16.64a1 1 0 0 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.402 16.402 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a20.736 20.736 0 0 1-1.952-1.282A16.29 16.29 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2m0 2a5.5 5.5 0 0 0-5.5 5.5c0 1.816.996 3.428 2.28 4.74c.966.988 2.03 1.74 2.767 2.202l.453.274l.453-.274c.736-.462 1.801-1.214 2.767-2.201c1.284-1.313 2.28-2.924 2.28-4.741A5.5 5.5 0 0 0 12 4m0 2.5a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
          />
        </g>
      </svg>
    ),
    title: <>Centros de Servicio</>,
    description: null,
    button: "Ver más información",
    buttonLink: "/centros",
    exeption: "location",
  },
  {
    icon: (
      <img className="w-12 h-12" src="/card-logo.png" alt="logo-in-card"></img>
    ),
    title: (
      <>
        Beteria en Casa es la empresa <br /> creada para ti
      </>
    ),
    description: null,
    button: "Ver más información",
    buttonLink: "/nosotros",
    exeption: "nosotros",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <path
          fill="#061684"
          d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2M9 6h6v2H9zm11 12H4v-3h2v1h2v-1h8v1h2v-1h2zm-2-5v-1h-2v1H8v-1H6v1H4v-3h16v3z"
        />
      </svg>
    ),
    title: (
      <>
        Conoce nuestro Servicio <br /> Eficaz y Profesional
      </>
    ),
    description: null,
    button: "Ver más información",
    buttonLink: "/servicio",
    exeption: "service",
  },
];


export const Cards = ({ page }) => {
  return (
    <div className="mt-8 px-5 mb-8">
      {cards.map((card, index) =>
        card.exeption === page ? null : (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-grey-lth w-full h-52 p-4 my-3 rounded-xl"
          >
            {card.icon}
            <div className="flex flex-col items-center -translate-y-4">
            <h2 className="text-lg font-semibold text-center">{card.title}</h2>
            <p className="font-bold text-2xl">{card.description}</p>
            </div>
            {card.button && (
              <Link
                href={`${card.buttonLink}`}
                className="bg-red-lth text-white text-sm w-52 py-2 rounded-lg flex items-center justify-center"
              >
                {card.button}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H1V7h11.293L9.146 3.854z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </div>
        )
      )}
    </div>
  );
};
