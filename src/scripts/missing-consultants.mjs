import Jobs from "@sourceflow-uk/sourceflow-sdk/jobs.js";
import BaseObject from "@sourceflow-uk/sourceflow-sdk/base_object.js";
import BaseCollection from "@sourceflow-uk/sourceflow-sdk/base_collection.js";
import { writeFileSync } from "fs";
import consultantData from "../../.sourceflow/consultant.json" assert { type: "json" };;
// import consultant_helper from "../helpers/consultant_helper.js";

const jobs = (await Jobs()).filter((job) => new Date(job?.expires_at) >= new Date()).getItems();

const header = "id,reference,title,aplitrak\n";
const rows = jobs.map((job) => {
        const external_application_email = job.external_application_email

        const nameFragment = /^(.*)\.\d+\.\d+\@/.exec(external_application_email)[1]
        const sanitisedNameFragment = nameFragment.split('.').join('').toLowerCase()

        const consultant_helper = (new BaseCollection(consultantData, "en")).getItems();
        // console.log(consultant_helper)
        let consultant = consultant_helper.find(i => i['name'].toLowerCase().replace(/\s+/g, '') == sanitisedNameFragment)

        if(!consultant){
          consultant = consultant_helper.find(i => {
            const nameparts = i['name'].split(' ')
            const shortname = `${nameparts[0][0]}${nameparts.slice(1).join('')}`.toLowerCase()

            return shortname == sanitisedNameFragment
          })
        }

        if(consultant){
          // not interested if we have found a consultant
          return "";
        }

        return (
          // Modify this to add the needed data if not already supported
          `${job.id},${job.external_reference},"${job.title}",${job.external_application_email}`
        );
      })
      .filter(x => x).join("\n")



// writes the file as a static xml file in the public folder
writeFileSync("public/missing-consultants.csv", `${header}${rows}`);
