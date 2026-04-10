import Image from "next/image";
import CardClinic from "@/components/CardClinic/CardClinic";
import Button from "@/components/Button/Button"
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div >
      <main>
        <NavBar/>
        <CardClinic/>
        {/* <Button/> */}
      </main>
    </div>
  );
}
