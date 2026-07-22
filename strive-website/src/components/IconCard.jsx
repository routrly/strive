import Card from './Card'

export default function IconCard({ icon: Icon, title, description }) {
  return (
    <Card className="flex flex-col items-start gap-4 h-full">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      <p className="text-text/70">{description}</p>
    </Card>
  )
}
