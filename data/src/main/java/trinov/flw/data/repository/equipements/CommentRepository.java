package trinov.flw.data.repository.equipements;

import org.springframework.data.repository.CrudRepository;
import trinov.flw.data.entity.equipements.Comment;

public interface CommentRepository  extends CrudRepository<Comment, Long> {
}
