import React, { Fragment, useMemo } from 'react';
import Layout from '../../shared/Layout';
import { Card, Row, Col } from 'react-bootstrap';
import data from './data.json';

const LocalData = () => {
  console.log(data);
  const users = useMemo(() => data, []);

  return (
    <Layout title="Data: Local">
      <Row className="my-5">
        {users.map((user, i) => (
          <Col key={i}>
            <Card className="my-2" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <h3>{user.name}</h3>
                  <small>{user.username}</small>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default LocalData;