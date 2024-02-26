import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Contact from "@/modules/contact";

const PAGE_TITLE = "Contact";
const PAGE_DESCRIPTION = "Let`s get in touch";

export default function ContactPage() {
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Contact />
    </Container>
  );
}
