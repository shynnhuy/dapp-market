import { useRef, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "mui-image";
import { create as ipfsHttpClient } from "ipfs-http-client";
// import ipfs from "../ipfs";

// const ipfs = new IPFS({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
// });
const Create = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const inputFileRef = useRef(null);

  const onFilechange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => saveToIpfs(reader);
    reader.readAsArrayBuffer(file);
    // try {
    //   const added = await ipfs.files.add();
    //   // const added = await axios.post(
    //   //   "https://ipfs.infura.io:5001/api/v0",
    //   //   { path: file.path },
    //   //   {
    //   //     headers: {
    //   //       "Content-Type": "multipart/form-data",
    //   //     },
    //   //   }
    //   // );
    //   console.log(added);
    //   // const url = `https://ipfs.infura.io/ipfs/${added.path}`;
    //   // setFileUrl(url);
    // } catch (error) {
    //   console.log("Error uploading file: ", error);
    // }
  };

  const saveToIpfs = async (reader) => {
  };

  return (
    <Box>
      <Stack spacing={2}>
        <TextField id="name" label="Asset Name" variant="outlined" />
        <TextField
          id="desc"
          label="Asset Description"
          variant="outlined"
          multiline
          maxRows={4}
        />
        <TextField id="price" label="Asset Price" variant="outlined" />
        <Button variant="outlined" onClick={() => inputFileRef.current.click()}>
          Upload asset
        </Button>
        <input hidden type="file" ref={inputFileRef} onChange={onFilechange} />
        {fileUrl && <Image showLoading width="350" src={fileUrl} />}
      </Stack>
    </Box>
  );
};

export default Create;
