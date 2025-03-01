import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-[61.81rem] bg-black flex flex-col items-center gap-14 py-20 px-10">
      <div className="sm:flex gap-8">
        <div className="relative w-[10.42rem] h-[2.45rem] xl:w-[257px] hidden">
          <Image src="./imgs/mitre.svg" alt="Mitre" width={200} height={100} />
        </div>
        <div className="relative w-[10.42rem] h-[2.45rem] xl:w-[257px] ">
          <Image
            src="./imgs/mitre-vendas.svg"
            alt="Mitre"
            width={200}
            height={100}
          />
        </div>
      </div>
      <div className="border border-[#803A2C]  w-[18.25rem] xl:w-[50%]"></div>
      <div className="font-unineue  text-white text-center text-[12px] space-y-6 sm:text-[14px] xl:px-56">
        <p>
          O empreendimento imobiliário só será comercializado após a devida
          aprovação do Projeto de Edificação Nova perante a municipalidade e o
          registro do Memorial de Incorporação no Cartório de Registro de
          Imóveis competente nos termos da Lei no 4.591/1964. Mitre Vendas
          Corretagem de Imóveis LTDA., CNPJ 21.677.690/0001-98, CRECI J-26794.
          *As vagas serão direcionadas para algumas unidades residenciais, mas
          nem todas as unidades terão direito a vagas.
        </p>
        <div>
          <p className="font-bold">Política de Privacidade.</p>
          <p>
            Nos comprometemos a nunca compartilhar seus dados com terceiros. Os
            dados aqui captados (Nome, E-mail e Telefone) serão utilizados única
            e exclusivamente pela incorporadora responsável por esse
            empreendimento para que seja possível o contato com o cliente e
            apresentação do produto objetivo dessa campanha.
          </p>
        </div>
        <div>
          <p className="font-bold">Privacy Policy</p>
          <p>
            We are committed to never share your data with third parties. The
            data collected here (Name, Email and Phone) will be used solely and
            exclusively by the developer responsible for this venture. This way
            it becomes possible to contact the client and introduce the product
            of this campaign.
          </p>
        </div>
        <p className="sm:pt-28">
          © {currentYear} | Haus Mitre Station Brooklin
        </p>
      </div>
    </footer>
  );
}
