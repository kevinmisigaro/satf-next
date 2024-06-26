"use client"

import StoryCard from "@/components/StoryCard";
import Header from "@/components/general/header";

function Page() {
  return (
    <div className=" max-w-3xl mx-auto mb-20">
      <Header text="Success Stories" />
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        <StoryCard
          title="Science and Technology- the New spotlight on Youth"
          excerpt="The leaders of the world agreed on the universal commitment for transforming our world, through the Sustainable Development Goals. The agenda 2030 has greater youth prioritization and set a new course of global development by 2030. Tanzania is among 193 countries that agreed upon that and pledged to mobilize efforts to end all forms of..."
          link="scienceandtech"
        />
        <StoryCard
          link="openingupworld"
          title="Opening the world to the learners with special needs!"
          excerpt="Luhira Primary School is a public school located in Ruvuma region in Songea district. The school accommodates students’ normal students and those with special needs such as vision, hearing impairment and albinism.  Currently the school has a total of 1030 pupils out of which 33 pupils are of special needs and 50 percent are visually..."
        />
        <StoryCard
          link="awardingbest"
          title="Awarding Best Performers!"
          excerpt="The Trust has a culture of embracing with rewards its beneficiaries who showcased exceptional efforts and performed well academically. On 25th January 2020, the Trust organized the College Forum at Mesuma Hotel, Dar es Salaam. The Forum brought together and rewarded 40 out of 54 beneficiaries with brand new computers and branded bags. These beneficiaries..."
        />
        <StoryCard
          link="changeiwanttosee"
          title="I am the change I wanted to see!"
          excerpt="Transforming the lives of the most vulnerable children(MVC) is the primary mission of the Trust. It involves various strategies that responds to contextual solutions, including skills development through  Vocational Training Education of its beneficiaries for those who could not excel to further education. Ms. Halima Mohamed Lindenga (on the photo), being among those who benefitted..."
        />
      </div>
    </div>
  );
}

export default Page;
