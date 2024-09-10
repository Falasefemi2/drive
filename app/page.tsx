import GoogleMapSection from "./(home)/googlemap/GoogleMapSection";
import SearchSection from "./(home)/search/SearchSection";




export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div><SearchSection /></div>
      <div className="cols-span-2"><GoogleMapSection /></div>
    </div>
  );
}
