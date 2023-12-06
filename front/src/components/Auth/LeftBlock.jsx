export default function LeftBlock() {
  return (
    <div id="left" className="w-1/2 h-screen rounded-r-2xl bg-primary flex justify-center items-center shadow-2xl">
      <div id="title-container" className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-4xl flex justify-center items-center gap-1">
          PixelArena <span className="material-symbols-outlined text-5xl font-bold">account_tree</span>
        </h1>
        <h3>Créez vos tournois de jeux vidéos</h3>
      </div>
    </div>
  );
}
