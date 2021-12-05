import { StyledPreviewBlock, IconCopy } from "./StyledPreviewBlock";
import useClipboard from "react-use-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PreviewBlock(props) {
  const textCss = `border-radius: ${props.propsBorder.radius.tl}px ${props.propsBorder.radius.tr}px ${props.propsBorder.radius.br}px ${props.propsBorder.radius.bl}px`
  const [isCopied, setCopied] = useClipboard(textCss);

  const copied = () => {
  setCopied()
  toast.success("Successfully Copied!",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })
}

  return <>
    <StyledPreviewBlock propsBorder={props.propsBorder}>
      <div>border-radius:{props.propsBorder.radius.tl}px {props.propsBorder.radius.tr}px {props.propsBorder.radius.br}px {props.propsBorder.radius.bl}px </div>
    </StyledPreviewBlock>
    <IconCopy onClick={e => copied()}></IconCopy>
  <ToastContainer />
  </>
}