/*
!!! IMPORTANT !!!

To use this feature in another project you must do the following:
- copy this script to `/scripts/indeed-xml.mjs`, note the special .mjs extension
- add `/public/indeed-jobs.xml` to the .gitignore file
- modify the `build` command in package.json:
    - Insert `node ./scripts/indeed-xml.mjs` between `next-sitemap` and `next export`
    - Ensure each command is separated with `&&`
- update the values below to be correct for the current site

*/
import { Jobs } from '@sourceflow-uk/sourceflow-sdk';
import { writeFileSync } from 'fs';
import { decode } from 'html-entities';

const jobs = (await Jobs()).filter((job) => (new Date(job?.expires_at)) >= (new Date())).getItems();

// !!!!! UPDATE THESE VALUES FOR EACH SITE
const siteName = 'Blue Arrow'; // Name of the client/website
const domain   = 'https://www.bluearrow.co.uk'; // Full domain
const jobsPath = `${domain}/jobs`; // Prefix for all jobs pages
const clientEmail = ''; // An email address Indeed may provide
// !!!!! UPDATE THESE VALUES FOR EACH SITE

const indeedFeed =
`<?xml version="1.0" encoding="utf-8"?>
<source>
    <publisher>${siteName}</publisher>
    <publisherurl>${domain}</publisherurl>
    ${ jobs.map((job) => {
        const cleanLocation = job.location?.replace(", United Kingdom", "")
        return(
            // Modify this to add the needed data if not already supported
            `<job>
                <title><![CDATA[${job.title}]]></title>
                <date><![CDATA[${job.created_at}]]></date>
                <referencenumber><![CDATA[${job.external_reference}]]></referencenumber>
                <url>
                    <![CDATA[${`${jobsPath}/${job.url_slug}?source=Indeed`}]]>
                </url>
                <company><![CDATA[${siteName}]]></company>
                <sourcename><![CDATA[${siteName}]]></sourcename>
                <city><![CDATA[${cleanLocation}]]></city>
                <state><![CDATA[]]></state>
                <country><![CDATA[UK]]></country>
                <streetaddress><![CDATA[${cleanLocation}, UK]]></streetaddress>
                <email><![CDATA[${clientEmail}]]></email>
                <description>
                    <![CDATA[${decode(job.description)}]]>
                </description>
                <salary><![CDATA[${job.salary_package} per year]]></salary>
                <expirationdate><![CDATA[${job.expires_at}]]></expirationdate>
            </job>`
        )

        })
        .join('')
    }
</source>`;

// writes the file as a static xml file in the public folder
writeFileSync('public/indeed-jobs.xml', indeedFeed);

