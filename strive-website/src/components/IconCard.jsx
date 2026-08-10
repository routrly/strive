import Card from './Card'

export default function IconCard({ icon: Icon, title, description }) {
  return (
    <Card className="group flex flex-col items-start gap-4 h-full">
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
        <Icon />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-200">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}
