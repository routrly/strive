export default function Picture({ webpSrc, src, alt, className, loading = 'lazy' }) {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img src={src} alt={alt} loading={loading} className={className} />
    </picture>
  )
}
