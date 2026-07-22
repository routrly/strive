import Seo from '../components/Seo'

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" description="STRIVE's terms and conditions." path="/terms" />
      <div className="pt-32 pb-16 px-6 max-w-3xl mx-auto prose">
        <h1 className="text-3xl font-bold text-primary mb-4">Terms & Conditions</h1>
        <p>
          This page will be updated with STRIVE's full terms and conditions
          governing use of this website and membership in the STRIVE network.
        </p>
      </div>
    </>
  )
}
