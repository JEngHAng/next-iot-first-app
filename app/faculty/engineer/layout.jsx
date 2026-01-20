export default function Layout({ children }) {
  return (
    <>
      <h1 className="text-center text-green-600 font-bold">Wow wow wow</h1>
      {/* {children} ห้ามเอาออกเด็ดขาด */}
      {children}
      <h1 className="text-center text-green-600 font-bold">Wee wee wee</h1>
    </>
  );
}
