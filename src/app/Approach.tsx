import ApproachEntryL from "./ApproachEntryL";
import ApproachEntryS from "./ApproachEntryS";

export default async function Approach({ approaches = [] }: any) {
  return (
    <section
      id="approach"
      className="flex flex-col  justify-center px-[16px]  tablet:px-[40px] py-[80px] desktop:px-[80px] desktop:py-[120px] gap-[40px] tablet:gap-[80px]"
    >
      <h2 className="text-[33px] desktop:text-[41px] desktop:leading-[48px] text-brand-100 tracking-[-0.33px] desktop:tracking-[-0.82px] ">
        Our Proven Approach to Digital Excellence
      </h2>
      <div className="hidden tablet:flex flex-col items-start gap-[40px]">
        {/* approach 1 */}
        {approaches.map((approach: any) => (
          <ApproachEntryL
            key={approach.id}
            name={approach.name}
            content={approach.content}
          />
        ))}
      </div>
      <div className="flex tablet:hidden flex-col items-start gap-[24px]">
        {approaches.map((approach: any) => (
          <ApproachEntryS
            key={approach.id}
            name={approach.name}
            content={approach.content}
          />
        ))}
      </div>
    </section>
  );
}
