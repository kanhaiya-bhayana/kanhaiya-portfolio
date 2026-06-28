'use client';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { experience } from '@/app/data/experience';
import 'react-vertical-timeline-component/style.min.css';
import Link from 'next/link';

export default function Timeline() {
  return (
    <VerticalTimeline animate={false}>
      {experience.map((item, i) => (
        <VerticalTimelineElement
          key={i}
          position={i % 2 ? 'right' : 'left'}
          date={item.date}
          icon={item.icon}
          iconStyle={{
            background: 'var(--gh-bg-primary)',
            color: item.color,
            border: `2px solid ${item.color}`
          }}
          contentStyle={{
            background: 'var(--gh-bg-primary)',
            color: 'var(--gh-text-primary)',
            border: `1px solid ${item.color}`,
            boxShadow: 'none'
          }}
          contentArrowStyle={{
            borderRight: `8px solid ${item?.color}`
          }}
          dateClassName="gh-date"
        >
          <h3 className="font-semibold mb-1">{item.title}</h3>
          <h4 className="mb-3 text-gh-secondary">{item.org}</h4>

          {/* =========  NEW  ========= */}
          {Array.isArray(item.summary) ? (
            <ul className="list-disc ml-5 space-y-1 text-sm leading-relaxed">
              {item.summary.map((line) => (
                <li key={line} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </ul>
          ) : (
            <p
              className="text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.summary }}
            />
          )}
          {item.links ? (
            <div className="flex flex-wrap gap-3 pt-3">
              {item.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : item.url ? (
            <Link href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              View Paper
            </Link>
          ) : null}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
