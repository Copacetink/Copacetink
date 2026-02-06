import BookingClient from "./BookingClient";



export default function BookingPage({

  searchParams,

}: {

  searchParams?: { artist?: string };

}) {

  const artist = searchParams?.artist;



  const normalized =

    artist?.toLowerCase() === "sunny" ? "Sunny" :

    artist?.toLowerCase() === "bamcbk" ? "BamCBK" :

    artist?.toLowerCase() === "tai" ? "Tai" :

    "Tai";



  return <BookingClient initialArtist={normalized} />;

}