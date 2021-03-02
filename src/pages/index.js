import React, { Component } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import ComponentNavbar from "../components/ComponentNavbar";
import ServiceEmployee from "../services/ServiceEmployee";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: [],
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies")
      .then((res) => {
        const data = res.data;
        this.setState({ data });
        console.log(res);
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <ComponentNavbar />
        <Container>
          <div style={{ borderStyle: "outset" }}>
            <h5 style={{ borderStyle: "outset" }}>List Data Karyawan</h5>
            <div
              style={{
                paddingRight: "30px",
                paddingLeft: "30px",
                paddingTop: "5px",
              }}
            >
              <Button color="primary" className="mb-3" href="/karyawan/add">
                Tambah
              </Button>
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Tanggal lahir</th>
                    <th>Jabatan</th>
                    <th>NIP</th>
                    <th>Jenis Kelamin</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No</td>
                    <td>Nama</td>
                    <td>Tanggal lahir</td>
                    <td>Jabatan</td>
                    <td>NIP</td>
                    <td>Jenis Kelamin</td>
                    <td align="center">
                      <Button
                        className="mr-3"
                        color="warning"
                        href="/karyawan/edit/:id"
                      >
                        <FaPen />
                      </Button>
                      <Button color="danger" onClick={this.toggle}>
                        <FaTrashAlt />
                      </Button>
                      <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>
                          Konfirmasi
                        </ModalHeader>
                        <ModalBody>
                          Apakah Anda akan menghapus data ini...?
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={this.toggle}>
                            Tidak
                          </Button>
                          <Button color="danger" onClick={this.toggle}>
                            Ya
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
