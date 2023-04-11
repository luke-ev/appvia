import { Alert, Button, Form, Input } from "antd"
import { StepProps } from "../lib/types"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import StepLayout from "../components/StepLayout"
import { detailsHandler, validationMessages } from "../lib/handlers"
import { StoreContext } from "../lib/provider"

const Details = ({ nextStep }: StepProps) => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [store, setStore] = useContext(StoreContext)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)

  const nextStepHandler = async ({ name }: { name: string }) => {
    setLoading(true)
    setAlert(false)
    const nameSubmit = await detailsHandler({ name })

    if (!!nameSubmit) {
      navigate(`/${nextStep}`)
      setLoading(false)
    } else {
      setAlert(true)
      setLoading(false)
    }
  };

  return (
    <StepLayout title="Details">
      <Form form={form} onFinish={nextStepHandler} validateMessages={validationMessages}>
        <div className="flex flex-col gap-3">
          <Form.Item initialValue={store.name || null} label="Name" name="name" rules={[{ required: true, max: 63 }]}>
            <Input value={store.name} onChange={(e) => setStore({ ...store, name: e.target.value })} />
          </Form.Item>
          <Form.Item initialValue={store.description || null} label="Description" name="description" rules={[{ required: true }]}>
            <Input.TextArea value={store.description} rows={5} onChange={(e) => setStore({ ...store, description: e.target.value })} />
          </Form.Item>
        </div>
        <div className="h-16 flex justify-between items-center gap-3">
          <div className="flex justify-start">
            {alert && <Alert message="Sorry, you don't have access to select features." type="error" />}
          </div>
          <div className="flex justify-start gap-3">
            <Button loading={loading} htmlType="submit">Next</Button>
          </div>
        </div>
      </Form>
    </StepLayout>
  )
}

export default Details
