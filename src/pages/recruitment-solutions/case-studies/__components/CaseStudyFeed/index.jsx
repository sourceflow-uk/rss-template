import clsx from "classnames";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import { CaseStudyCard, Title } from "@/ui";
import { case_study_helper } from "@/helpers/case_study_helper";
import { getRoute } from "@/getters/getRoute";
import classes from "./styles.module.scss";
import { useLoadMore } from "@/hooks/useLoadMore";

export default function CaseStudyFeed({ className, title }) {
  const [items, loadMore, page, pages] = useLoadMore(case_study_helper.fetch());

  return (
    <div className={clsx(className, classes.feed)}>
      <Container className="mw-xxl">
        <Title title={title} />
        <Row>
          {items.map(({ title, card_image, cover_image, url_slug }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4">
              <CaseStudyCard title={title} img={card_image ?? cover_image} href={getRoute("caseStudy", { url_slug })} />
            </Col>
          ))}
        </Row>
        {page < pages && (
          <Stack className={clsx(classes.feed__footer)}>
            <Button variant="secondary" onClick={loadMore}>
              Load More
            </Button>
          </Stack>
        )}
      </Container>
    </div>
  );
}

CaseStudyFeed.defaultProps = {
  className: "py-5",
};

CaseStudyFeed.propTypes = {
  className: PropTypes.string,
};
