import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import { projectData } from '@/src/Assets/assets'
import PagesNavbar from '@/src/components/PagesNavbar'

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const project = projectData.find((item) => item.slug === slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
    keywords: project.techStack,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.image?.src
        ? [
            {
              url: project.image.src,
              alt: project.title,
            },
          ]
        : [],
    },
  }
}

export default async function SingleProjectPage({ params }: Params) {
  const { slug } = await params
  const project = projectData.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  const statusText = project.isCompleted ? 'Completed' : 'In Progress'
  const statusTone = project.isCompleted
    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'

  return (
    <div>
      <PagesNavbar />
      <div className="mt-24 min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-6 md:px-10 pt-6 pb-4">
          <Link
            href="/Project"
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium group text-3xl"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to All Projects
          </Link>
        </div>
        <section className="relative pt-12 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
          <div className="relative container mx-auto px-6 md:px-10">
            <div className="text-center">
              <h1 className="text-6xl font-extrabold tracking-wide text-gray-900 dark:text-gray-100">
                {project.title}
              </h1>
              <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex justify-center gap-3 flex-wrap">
                <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${statusTone}`}>
                  {statusText}
                </span>
                {project.techStack.map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mt-10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 md:pb-32">
          <div className="container mx-auto px-6 md:px-10 max-w-4xl space-y-16">
            <div className="prose dark:prose-invert prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p>{project.fullDescription}</p>
            </div>
            {project.features?.length ? (
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project.challenges?.length ? (
              <div>
                <h2 className="text-3xl font-bold mb-6">Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="text-gray-700 dark:text-gray-300">• {challenge}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project.results?.length ? (
              <div>
                <h2 className="text-3xl font-bold mb-6">Results</h2>
                <ul className="space-y-2">
                  {project.results.map((result) => (
                    <li key={result} className="text-gray-700 dark:text-gray-300">• {result}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div>
              <h2 className="text-3xl font-bold mb-6">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, idx) => (
                  <div key={`${project.slug}-${idx}`} className="rounded-xl overflow-hidden shadow-lg max-w-full justify-around">
                    <Image
                      src={screenshot}
                      alt={`Screenshot ${idx + 1}`}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold mb-6">Check It Out</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
                  >
                    <FaGithub /> GitHub Repo
                  </a>
                ) : null}
                {project.backendGithubUrl ? (
                  <a
                    href={project.backendGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-gray-900 dark:text-gray-100 font-medium border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  >
                    <FaGithub /> Backend GitHub Repo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}