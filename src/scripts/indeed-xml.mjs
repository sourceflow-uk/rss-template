import Jobs from "@sourceflow-uk/sourceflow-sdk/jobs.js";
import BaseObject from "@sourceflow-uk/sourceflow-sdk/base_object.js";
import { writeFileSync } from "fs";
import { decode } from "html-entities";
import globalData from "../../.sourceflow/global.json" assert { type: "json" };

/**
 * !!! IMPORTANT !!!
 *
 * To use this feature in another project you must do the following:
 * - copy this script to `/scripts/indeed-xml.mjs`, note the special .mjs extension
 * - add `/public/indeed-jobs.xml` to the .gitignore file
 * - modify the `build` command in package.json:
 *     - Insert `node ./scripts/indeed-xml.mjs` between `next-sitemap` and `next export`
 *     - Ensure each command is separated with `&&`
 * - update the values below to be correct for the current site
 */
const global = new BaseObject(globalData, "en").toJson();
const jobs = (await Jobs()).filter((job) => new Date(job?.expires_at) >= new Date()).getItems();

const siteName = global["_theme.company.name"];
const domain = global["_theme.company.domain"];
const clientEmail = global["_theme.company.email"];

const indeedFeed = `<?xml version="1.0" encoding="utf-8"?>
<source>
    <publisher>${siteName}</publisher>
    <publisherurl>${domain}</publisherurl>
    ${jobs
      .map((job) => {
        const cleanLocation = job.location?.replace(", United Kingdom", "");
        return (
          // Modify this to add the needed data if not already supported
          `<job>
                <title><![CDATA[${job.title}]]></title>
                <date><![CDATA[${job.created_at}]]></date>
                <referencenumber><![CDATA[${job.external_reference}]]></referencenumber>
                <url>
                    <![CDATA[${`${domain}/jobs/${job.url_slug}?source=Indeed`}]]>
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
        );
      })
      .join("")}
</source>`;

// writes the file as a static xml file in the public folder
writeFileSync("public/indeed-jobs.xml", indeedFeed);
