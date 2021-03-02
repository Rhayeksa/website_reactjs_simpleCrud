import React, { Component } from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
} from "reactstrap";
import ComponentNavbar from "../components/ComponentNavbar";

class PageEdit extends Component {
  render() {
    return (
      <div>
        <ComponentNavbar />
        <Container>
          <Form>
            <div style={{ borderStyle: "outset" }}>
              <h5 style={{ borderStyle: "outset" }}>Edit Data Karyawan</h5>
              <div
                style={{
                  padding: "5px 30px 30px 15px",
                }}
              >
                <div style={{ padding: "50px" }}>
                  <FormGroup row>
                    <Label for="name" sm={2}>
                      Nama
                    </Label>
                    <Col sm={5} md={{ size: 6, offset: 3 }}>
                      <Input type="text" name="name" id="name" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="birthDate" sm={2}>
                      Tanggal Lahir
                    </Label>
                    <Col sm={5} md={{ size: 6, offset: 3 }}>
                      <Input type="date" name="birthDate" id="birthDate" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="name" sm={2}>
                      Jabatan
                    </Label>
                    <Col sm={5} md={{ size: 6, offset: 3 }}>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="name" sm={2}>
                      NIP
                    </Label>
                    <Col sm={5} md={{ size: 6, offset: 3 }}>
                      <Input type="text" name="name" id="name" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>Jenis Kelamin</Label>
                    <Col sm={5} md={{ size: 6, offset: 3 }}>
                      <input
                        id="pria"
                        name="gender"
                        type="radio"
                        value="1"
                        className="mr-2"
                      />
                      <label className="mr-5" for="pria">
                        Pria
                      </label>
                      <input
                        id="wanita"
                        name="gender"
                        type="radio"
                        value="2"
                        className="mr-2"
                      />
                      <label for="wanita">Wanita</label>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Row>
                      <Col xs="6">.</Col>
                      <Col xs="6">
                        <Button color="primary" className="mr-5">
                          Simpan
                        </Button>
                        <Button color="secondary" href="/">
                          Kembali
                        </Button>
                      </Col>
                    </Row>{" "}
                  </FormGroup>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

export default PageEdit;
