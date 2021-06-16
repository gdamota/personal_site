import React, {Component} from "react";
import MediaCard from "../../../components/elements/jsx/Card.js";

const ListRender = data => {
  console.log(data);
  return (
    <div className="skills-page">
      {data.data.map(el => (
        <div>
          <MediaCard data={el} />
        </div>
      ))}
    </div>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "About Me",
          body: "Click images for more info",
          img:
            "https://travel.usnews.com/dims4/USNEWS/6fa917f/2147483647/resize/1280x350%5E%3E/crop/1280x350/quality/85/?url=https://travel.usnews.com/images/hero_cabo_san_lucas_13_1280x350_Glh2RIW.jpg",
          info: [
            "Born in Newtown, CT in July of 1997",
            "Attended High School in Cabo San Lucas, MX where I worked for Andeu - a web consulting company",
            "Studied at University of San Diego for three years before accepting a position at Reps and Company - a live event start up focused on the accurate pricing of admissions",
            "Worked for the past three years as a full stack Software Engineer for Reps and Co in San Diego, CA"
          ],
          links: []
        },
        {
          name: "Front-end and React Experience",
          body: "Written Multiple SPA's of all different sizes",
          img:
            "https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg",
          info: [
            "Contributed to an internal analytics website built using the React framework and Redux state management. This internal business tool, dubbed Konami, was written for Reps and allowed the Company's Brokers to better analyze market positions. This large and inclusive SPA consisted of many valuable features including a screener that allowed users to filter all events in our database on many different (Moving Averages, Bid/Ask prices, Volume, Ect), similar to a stock screener. Konami also included a dashboard  that a user could access from the search page. This dashboard served to assist Reps in analyzing many key metrics about an event. When possible these metrics were displayed as time series graphs constructed using CanvasJs. Another key features of the application was autopricing functionality - this feature will update prices for inventory based on criteria set by a user. For example; set prices to always be 1% lower than these comprable items on these specific marketplaces",
            "Constructed a data cleanse application to help better structure company records for Reps' Data Scientists. The Front-end of this applicaiton was written in react and consisted of a search page for corresponding database records, a display for record information, and a form submission which would make a post request to update the selected records in the RDS MySQL instance",
            "Chrome Extension used for Inventroy tracking. This light weight chrome extension called Tagalong allowed for consistent reliable tagging of purchased inventory by company buyers. Tagalong would scrape elements from the confirmation or error page of buys and save the information in various database tables to be acted or analyzed. Tagalong would then use Jquery to insert a response message with the information sent to the back end for varification",
            "Developed a productivity app called TopNotch using Svelte. This web app included an email client, calander feature, kanban board, and notes page all located within one tab of your browser. TopNotch was integrated with Google suite and built on top of many of Googles API's.",
            "Developed an Ecommerce webstie for the sale of yoga products. Currently named wave yoga.",
            "Wrote this lil website to help better display my resume and career experience"
          ],
          links: [
            "http://wave-ecommerce.s3-website-us-east-1.amazonaws.com/",
            "https://topnotch.rocks/"
          ]
        },
        {
          name: "Python Projects",
          body:
            "REST APIs, Inventory Tagging Service, Email Scraping Service, Various Automations, Web Scraping and Data Ingestion",
          img:
            "https://cdn.searchenginejournal.com/wp-content/uploads/2020/02/6-seo-tasks-to-automate-with-python-5e58741e6c1bd-760x400.png",
          info: [
            "Constructed many endpoints for the projects mentioned in the Front-end section. These endpoints include the search endpoint for the konami screener page, the threshold endpoint for konami and the autopricer, all of the endpoints for the data cleanse tool, and the endpoints to store the inventory information sent from Tagalong",
            "Inventory tagging service that used the information scraped by Tagalong's Chrome Extension to update inventory with the proper tags and barcodes in the point of sale software",
            "IMAP service to scrape company mail boxes for cancellation emails. If found this service would alert the inventory reconsilliation team and create a record in their Airtable with the cancellation information",
            "Created an enpoint to craft an inventory report in google sheets. This was used by accounting and the purchase team to assess which accounts and lines of credits to either purchase on or pay off",
            "Automated account creation on all platforms used by Reps to free up resources and cut payroll expenses",
            "Wrote a service that would run twice daily to gather pricing information from several marketplaces and store them in our database for use in Konami",
            "Selenium scripts to gather data that was not supported by third party API's"
          ]
        },
        {
          name: "AWS and DevOps",
          body:
            "LAMBDA, S3, RDS, API GateWay, SQS, Step Functions, Cloudwatch, BOTO3, Ansible, Shell Deployment Scripts",
          img:
            "https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/bb-megalaunch-blog1-hero@2x-1-1560x760.png",
          info: [
            "Main operational database was housed in AWS RDS and was a MySQL cluster",
            "Managed Several EC2 instances that hosted Konami and ran any services to intense for Lambda (Email scraper and Selenium automations)",
            "Used API Gateway to host many API's and python scripts serverlessly. This includes all the API's perviously mentioned, account automation service, report generation service, and data ingestion scripts",
            "Services that included multiple scripts or steps were completed using Step Functions allowing Lambdas to invoke and communicate with other Lambdas",
            "Utalized Simple Queue service to build jobs for the data ingestion and tagging service",
            "All services had custom Cloudwatch dashboards with key metrics to analyze the health of the applicaiton",
            "Hosted data cleanse tool in S3",
            "All json returns from the data ingestion scripts were saved in an S3 data lake prior to transformation for database insertion",
            "All EC2 deployment was automated via Ansible playbooks to quickly provision environments and deploy code changes",
            "Wrote bash scripts to package and deploy lambdas and the Tagalong Chrome Extension"
          ],
          links: []
        },
        {
          name: "Client Aquisition and Management",
          body: "Managed new client aquisition and feature enhancement",
          img:
            "https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/2018/06/Types-of-CRM.png",
          info: [
            "Sales associate for Andeu",
            "Responsabilities included marketing the companies web development abilities to Small/Medium sized business, meeting with prospective clients and creating frameworks, managing existing clients needs"
          ],
          links: []
        }
      ]
    };
  }

  render() {
    return (
      <div className="transparent">
        <ListRender data={this.state.data} />
      </div>
    );
  }
}

export default Home;
