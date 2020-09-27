import React from "react";
import { connect } from "react-redux";

import { loadTopics } from "../../actions";
import Wrapper from "./ListTopics.styled";

const ListTopics = ({ fetchTopics }) => {
  return (
    <Wrapper>
      <div className="list-topics" onClick={() => fetchTopics()}>
        111
      </div>
    </Wrapper>
  );
};

const mapStateToProps = ({ test }) => ({
  test,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTopics: () => dispatch(loadTopics()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTopics);
