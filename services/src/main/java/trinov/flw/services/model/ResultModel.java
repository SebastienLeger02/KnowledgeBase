package trinov.flw.services.model;

/**
 * Created by thibault
 * Date: 07/09/18
 * Time: 15:51
 */
public class ResultModel {
    private Boolean success;
    private String message;

    public ResultModel(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
