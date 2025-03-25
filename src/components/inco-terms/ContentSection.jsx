import Image from "next/image"

export default function ContentSection({ id, title, content, image, isHtml = false }) {
  return (
    <section id={id} className="scroll-mt-24 bg-white rounded-xl p-6 sm:p-8 shadow-md mb-8">

      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="prose prose-lg max-w-none">

        {isHtml ? (
          <div
            className="text-gray-700 text-lg space-y-3"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p className="text-gray-700 leading-relaxed mb-8">{content}</p>
        )}

        {image && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 mb-6">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}

