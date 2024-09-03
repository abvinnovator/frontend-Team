import React from "react";
import { motion } from 'framer-motion'; 
const Community=()=>{
 return(
    
    <div className="sections py-20 px-20   ml-11   w-25 max-w-50 justify-center mr-11 gap-5">
    <div className="section2 section_padding mx-6">
      <div className="integrations_title max-w-[1020px] mx-auto font-bold justify-center">
        <h2></h2>We offer support to help our clients succeed based on their goals and constraints.
      </div>
      <div className="clear"></div>
      <div className="offer_support">
        <div className="flex_box flex flex-row-reverse py-9">
          <div className="flex2 min-w-[240px] flex-1">
            <div className="vertical_middle"></div>
            <div className="block_sec3 block_left max-w-[500px] text-left">
              <div className="support_text1 font-bold">
                <span>Data Enrichment- Manually + Automatically</span>
              </div>
              <div className="support_text2 font-bold">
                We sync your alumni profiles with LinkedIn to keep your database updated and integrate your alumni’s social activity into your network.
              </div>
            </div>
          </div>
          <div className="flex2 min-w-[240px] flex-1">
            <img
              src="https://d26pkxyw9vw39t.cloudfront.net/assets/us_landing/support_to_clients/data_enrichment-f15d8dc25d53dd3bec9dfdfac00330bca6da505aad095dd7314cea967103ad33.png"
              alt="Data Enrichment"
              className="support_image"
            />
          </div>
        </div>
  
        <div className="flex_box flex flex-row py-9">
          <div className="flex2 min-w-[240px] flex-1">
            <div className="vertical_middle"></div>
            <div className="block_sec3 block_left max-w-[500px] text-left">
              <div className="support_text1">
                <span>Online alumni events- End to End</span>
              </div>
              <div className="support_text2">
                We conceptualize and provide support for events like career fairs, homecoming, graduation, and more right from promotion to execution.
              </div>
            </div>
          </div>
          <div className="flex2 min-w-[240px] flex-1">
            <img
              src="https://d26pkxyw9vw39t.cloudfront.net/assets/us_landing/support_to_clients/online_alumni_events-0e94a0b779f67802e00568587e192b23f162fc7e1ec20e1845b2d6cd8e5dd30b.png"
              alt="Online Alumni Events"
              className="support_image"
            />
          </div>
        </div>
  
        <div className="flex_box flex flex-row-reverse py-9">
          <div className="flex2 min-w-[240px] flex-1">
            <div className="vertical_middle"></div>
            <div className="block_sec3 block_left max-w-[500px] text-left">
              <div className="support_text1">
                <span>Content Creation- Newsletters, Interviews & Webinars</span>
              </div>
              <div className="support_text2">
                We help you create and share content to boost activity and engagement in your network with minimal time commitment.
              </div>
            </div>
          </div>
          <div className="flex2 min-w-[240px] flex-1">
            <img
              src="https://d26pkxyw9vw39t.cloudfront.net/assets/us_landing/support_to_clients/content_creation-ac4b51bf9e1f5f59e60fc01474804c816c9c0c356f097665508e850687a0ab1e.png"
              alt="Content Creation"
              className="support_image"
            />
          </div>
        </div>
  
        <div className="flex_box flex flex-row py-9">
          <div className="flex2 min-w-[240px] flex-1">
            <div className="vertical_middle"></div>
            <div className="block_sec3 block_left max-w-[500px] text-left">
              <div className="support_text1">
                <span>Dedicated Account Manager for customization and personalisation</span>
              </div>
              <div className="support_text2">
                We provide a dedicated account manager to help you customize your network and get the most out of our platform.
              </div>
            </div>
          </div>
          <div className="flex2 min-w-[240px] flex-1">
            <img
              src="https://d26pkxyw9vw39t.cloudfront.net/assets/us_landing/support_to_clients/dedicated_account_manager-e1659a4ef866c194696cc0075e6bf7d217538d242fc2d838055f91e01d80e71c.png"
              alt="Dedicated Account Manager"
              className="support_image"
            />
          </div>
        </div>
  
        <div className="clear"></div>
      </div>
    </div>
  </div>
  

        
 )
};
export default Community;
