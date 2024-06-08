package com.example.loginauthapi.Controllers;
import com.example.loginauthapi.DTO.CollaboratorRequest;
import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Service.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/colaborador")
public class ColaboradorController {
    @Autowired
    private ColaboradorService colaboradorService;

    @PostMapping
    public Colaborador create(@RequestBody @Valid Colaborador colaborador){

        return colaboradorService.create(colaborador);
    }
    @GetMapping
    public List<Colaborador> list(){
        return colaboradorService.getAll();
    }


    @PutMapping("/{id}")
    public Colaborador updateCollaborator(@PathVariable("id") Long id, @RequestBody CollaboratorRequest dto) {
        return colaboradorService.update(id, dto);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id")Long id){
        colaboradorService.delete(id);
    }
}
