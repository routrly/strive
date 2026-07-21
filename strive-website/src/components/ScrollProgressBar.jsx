import useScrollPosition from '../hooks/useScrollPosition'

export default function ScrollProgressBar() {
  const { scrollProgress } = useScrollPosition()
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  )
}
